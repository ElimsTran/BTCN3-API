const classService = require("./classService");

exports.getAllClasses =  function(req,res){
    classService.GetAllClasses(classes => {
      console.log(classes)
      if (classes){
          res.status(200).json(classes);
      }
      else{
        res.status(404).json({
          message: 'No class available'
        })
      }
    });
}

exports.addClass =  function(req,res){
  const classInfo = req.body;
  if( classInfo.className &&  classInfo.teacherName  && classInfo.quantity){
    classService.addClass(classInfo,InsertResuil =>{
      if(InsertResuil === 200)
        res.status(InsertResuil).json("Add new class successful!!!")
      else
        res.status(404).json("Error")
    })
  }else{
    res.status(404).json("Bad request")
  }
}

exports.detail = function(req,res){
  const id = req.params.id;
  const classItem = classService.detail(id);
  if (classItem){
    res.status(200).json(classItem);
  }
  else{
    res.status(404).json({
      message: 'The class with given ID was not found'
    })
  }
}