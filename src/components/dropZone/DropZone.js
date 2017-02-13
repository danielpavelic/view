import React from 'react';
import Drop from 'react-dropzone';
import request from 'superagent';

class DropZone extends React.Component {
    constructor(context){
        super(context);
    }

    onDrop(files) {
      //console.log('Received files: ', files);

      /*var req = request.post('http://localhost:3003/api/v1/catalogs/');
        acceptedFiles.forEach((file)=> {
            req.attach(file.name, file);
        });*/
        
        var formData = new FormData();

        formData.append('name', 'someName');
        formData.append('userId', 'someUserId');
        
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            
            formData.append('images', file, file.name);
            formData.append('sortOrder', i);
        }
        

        /*var imagesArray = [];
        files.forEach((file, index)=> {
            imagesArray.push({
                sortOrder: index,
                path: file.name,
                file: file
            });
        });

        var data = {
            name: 'attached title 1',
            userId: 'someUserId',
            image: imagesArray
        };*/
        
         console.log('formData: ' + JSON.stringify(formData));

        request.post('http://localhost:3003/api/v1/catalogs/')
                //.set('Content-Type', 'multipart/form-data')
                //.send(data)
                .send(formData)
                //.attach(files[0])
                .end(function(err, res){
                    if(err) console.log(err);
                    console.log(JSON.stringify(res));
                });
        

        
        


    }

    render(){
        return(
            <Drop onDrop={this.onDrop} className="dropContainer" name="images">
              <div>Drop images here or click to select files for upload.</div>
            </Drop>
        );
    }


    
}
module.exports = DropZone;