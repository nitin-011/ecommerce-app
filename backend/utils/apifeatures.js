class ApiFeactures {
    constructor(query,queryStr){
      this.query=query;
      this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr,
                $options:"i",

            }
        }:{}

        this.query=this.query.find({...keyword})
        return this
    }

    filter(){
        const queryCopy = {...this.queryStr}

        const removeFields = ["keyword", "page","limit"]

        removeFields.forEach(key => delete queryCopy[key]);

        let queryStr = JSON.stringify(queryCopy);
        queryStr = query.replace(/\b(gt|gte|lt|lte)\b/g,key => `$${key}`);

        this.query = this.query.find(queryCopy);
        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page)||1;

        const skip = resultPerPage*(currentPage - 1)
        }
}

module.exports= ApiFeactures