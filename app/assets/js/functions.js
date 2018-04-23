$(function(){
    $('button').click(function(){
        return false;
    });

    const {dialog} = require('electron').remote,
          fs = require('fs');

    $('#select-directory').click(function(){
        dialog.showOpenDialog({
            title:"Seleccione directorio de videos",
            properties: ["openDirectory"]
        }, directories => {
            if (directories){
                $('#directoryInfo').html(directories[0]);
                $('#action-elements').removeClass('hidden');
            } else
                $('#action-elements').addClass('hidden');
        });
    });

    $('#load-directory').click(function(){
        let files = fs.readdirSync($('#directoryInfo').html());
        let maxElements = files.length;
        files.forEach(function(file, index){
            let id = `item${maxElements-(index + 1)}`;
            let input = `<input id="${id}" type="checkbox" checked>`;
            let label = `<label for="${id}">${file}</label>`;
            $('#todo-list .items').prepend(label);
            $('#todo-list .items').prepend(input);
        });
    });

});
