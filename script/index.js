$(document).ready(function() {
    init();
});
function init(){
    var ref = new Firebase("https://intense-heat-8777.firebaseio.com/PongosaursRex");
    ref.child("TrainingPrograms").on("value", function(programs){
        // Given a DataSnapshot containing a child "fred" and a child "wilma", this callback
        // function will be called twice
        var counter = 0;
        programs.forEach(function(program) {
          
            var key = program.key();
            // childData will be the actual contents of the child
            counter++;
            var propertyRef = new Firebase("https://intense-heat-8777.firebaseio.com/PongosaursRex/TrainingPrograms");
            propertyRef.child("Program" + counter).on("value", function(attributes){
                 $("#ddlTrainingProgram").append('<option value=' + counter  + '>' + attributes.val().Name + '</option>');
            });
        });
    });
    counter = 0;
}