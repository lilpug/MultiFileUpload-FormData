$(document).ready(function ()
{
    $(document).on("click", ".close", function () {
        $(this).parent().parent().remove();
    });

    //Adds an extra block of a field group
    $(document).on("click", "#add-more", function ()
    {   
        var html = '<div class="group-item card p-3 mb-3">';

        html += '<div class="row">';
        html += '<button type="button" class="close text-right col-1 offset-10">';
        html += '<span aria-hidden="true">×</span>';        
        html += '</button>';
        html += '</div>';

        html += '<div class="form-group">';
        html += '<label for="file">File:</label>';
        html += '<input type="file" class="form-control" name="file" />';
        html += '</div>';

        html += '<div class="form-group">';
        html += '<label for="description">Description:</label>';
        html += '<input type="text" class="form-control" name="description" value="" />';
        html += '</div>';

        html += '<div class="form-group">';
        html += '<label for="price">Price:</label>';
        html += '<input type="number" class="form-control" name="price" step="any" />';
        html += '</div>';

        html += '</div>';
        if ($("#form-group .group-item:last").length) {
            $("#form-group .group-item:last").after(html);
        }
        else {
            $("#form-group").html(html);
        }
    });

    //Deals with processing the ajax request from potentially multiple file uploads and parameters
    //Note: as this is an example only, it does not do any validation checks!
    $(document).on("submit", "#upload-form", function (e)
    {
        var formData = new FormData();

        //Loops over each .group item div and pulls the field values out
        $(".group-item").each(function (key, value)
        {       
            //Pulls out all the individual values and files for this example
            var file = $(this).find("input[name=file]").prop('files')[0];
            var description = $(this).find("input[name=description]").val();
            var price = $(this).find("input[name=price]").val();

            //Loops through them and adds them into formData
            formData.append("request[" + key + "].file", file);
            formData.append("request[" + key + "].description", description);
            formData.append("request[" + key + "].price", price);            
        });

        //Does a simple ajax query with axios (for this example) and sends our formData to MVC
        axios.post('/api/SubmitDocuments', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });       

        //Stops the form submit from continuing
        e.preventDefault();
    });
});