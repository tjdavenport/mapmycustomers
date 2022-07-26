import { createServer } from "miragejs";
import {data as companyData } from './data/companies.json';

createServer({
    routes() {
        this.get("/api/company", () => companyData )
        this.get("/api/v2/company", (_schema,request) => {
            const { limit, offset } = request.queryParams;
            //TODO : Return data given a limit & offset
        } )
    }
})