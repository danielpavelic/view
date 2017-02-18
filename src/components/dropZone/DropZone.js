import React from 'react';
import Drop from 'react-dropzone';
import request from 'superagent';

class DropZone extends React.Component {
    constructor(context){
        super(context);
    }

    onDrop(files) {
        
        


        var formData = new FormData();
        for(let i = 0; i < files.length; i++){
            formData.append('images', files[i]);
        }

        console.log(JSON.stringify(formData));

        request.post('http://localhost:3003/api/v1/catalogs/')
               //.set('Content-Type', 'multipart/form-data')
               .send(formData)
                .end(function(err, res){
                    if(err) console.log(err);
                    console.log(JSON.stringify(res));
                });

                //
                //.send(data)
                
                //.attach(files[0])
                
        
               
        
        


    }

    render(){
        return(
            <Drop onDrop={this.onDrop} className="dropContainer" name="images">
              <div>Drop images here or click to select files for upload.</div>
            </Drop>
        );
    }


    
}
export default DropZone;