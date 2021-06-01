
const fs = require("fs");
const mime = require("mime-types");
const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
    let page = "." + (req.url || "/");
    if(page.endsWith("/")) {
        page = page + "index.html";
    fs.readFile(page, (err, data) => { 
            if(err) {
                res.status(404);
                const ext = path.extname(page);
                if(ext === ".html" || ext === "") {
                    fs.readFile("/404.html", (err, data) => {
                        if(err) {
                            res.status(500);
                        }
                        else {
                            res.write(data);
                        }
                    })
                }
                res.end();
                return;
            } else {
                res.type(path.extname(page))
                //res.setHeader("Content-Type", mime.lookup(page));
                res.writeHead(200);
                res.write(data);
                res.end();
            }     
      
        });
    };
});
   


app.listen(process.env.PORT || 8000);