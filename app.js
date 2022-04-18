const sharp = require("sharp");

let path = (process.argv[2]); // pegando o caminho da imagem
let widht = Number(process.argv[3]);

console.log(path + widht);

function resize (path, widht){

    //npm install sharp

    sharp(path).resize({width: widht}).toFile('./temp/output_resize.jpg'), (err) => {

        if(err){

            console.log(err);


        }else {

            console.log ('Redimesionada com sucesso');
        }



    };

}

resize(path,widht);