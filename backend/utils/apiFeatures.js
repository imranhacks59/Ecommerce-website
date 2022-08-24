class Apifeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword ?
        {
            name:{
                $regex: this.queryStr.keyword,
                $options: "i", //mongodb method that mke insentive, if you search in capital also it will check in small

            }
        } :
        {};
          
        console.log(keyword);
        this.query = this.query.find({...keyword});
        return this; //means yhi class return ho jayega

    }
    // filetr
    filter(){
        const queryCopy = {...this.queryStr};
        // console.log(querycopy);
        // removing some fields for category
        const removeFields = ["keyword","page","limit"];
        removeFields.forEach(key=> delete queryCopy[key]);

        // console.log(querycopy);
        // filter for price and and rating that will work but we have to put exact value
        console.log(queryCopy);
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=>`$${key}`);

        // this.query = this.query.find(querycopy);
        // string me kiye to ab phir object me krna hoga
        
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1; //if in querStr enter value so we have to convert in number if not query then take 1st page by defaul

        const skip = resultPerPage * (currentPage-1); //if we are in current page that is 1 so skip is 0 bcs we have to skip 0 products
        

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
};

module.exports = Apifeatures