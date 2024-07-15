export default class Globals {
    
    static BASE_URL: string =
        process.env.NODE_ENV === "production"
            ? "https://evshow-global.com/"
            : "http://localhost:3000/";
}