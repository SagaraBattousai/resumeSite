var bio = {
  "names" : "James Manzoor",
  "role" : "Student",
  "contacts" : {
    "mobile" : "+447972015704",
    "email" : "james.manzoor14@imperial.ac.uk",
    "github" : "jamesacm",
    "linkedin" :"jamesmanzoor",
    "location" : "Brighton and Hove, UK"
  },
  "cv" : {
    "name" : "JamesManzoorCV",
    "location" : "JamesManzoorCV.pdf"
  },
  "pictureURL" : "images/jam414.jpg",
  "welcomeMessage" : "Hi",
  "skills" : ["Java", "Haskell", "C", "C++", "HTML", "CSS", "x86 Assembly", "Ruby",
              "UnrealScript", "JavaScript"]
}

var work = {
  "jobs" : [
    {
      "employer" : "Microsoft Research",
      "title" : "Intern",
      "dates" : "Four days",
      "location" : "Cambridge, UK",
      "description" : "Programmed in C# on the .Net Gadgeteer and shadowed Various Teams" +
                      "in the Human Experience & Design and the Machine Learning Teams." +
                      "Making programing tutorials and looking at diferent areas of" +
                      "research such as Machine Learning."
    },
    {
      "employer" : "Invoke Capital",
      "title" : "Intern",
      "dates" : "One week",
      "location" : "Cambridge, UK",
      "description" : " Programmed with the App Development team working on Augmented " + 
                      "Reality. Worked mainly on testing the actual use of the app and" +
                      " built 3D models to test its limits."
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "Brighton College",
      "location" : "Brighton",
      "degree" : "11 GCSE's and 4 A-Levels", //qualifications
      "major" : "",
      "years" : "2009 - 2014 ",
      "schoolWebsite" : "https://www.brightoncollege.org.uk"
    },
    {
      "name" : "Imperial College",
      "location" : "London",
      "degree" : "Masters",
      "major" : ["Computer Science", "Japanese"],
      "years" : "2014 - 2018 ",
      "schoolWebsite" : "http://www.imperial.ac.uk/computing"
    }
  ]
}

var projects = {
  "projects" : [
      {
        "title" : "OniGame",
        "url" : "",
        "type" : "Game Design",
        "programingLanguage" : "UnrealScript",
        "dates" : "2015 - ",
        "description" : "Designing a game in the style of Nintendo's Legend of Zelda Series using Unreal's UDK.",
        "images" : []//["images/smileySleepyCat.jpg","images/cuteCat.jpg","images/cuteCatStare.jpg"]
      },
      {
        "title" : "Web Apps",
        "url" : "bomberman",//webapps",
        "type" : "Webapp Games",
        "programingLanguage" : "Javascript and java",
        "dates" : "18/05/2016 - 16/05/2016",
        "description" : "A series of web based games mainly using babylon js for the front end" +
          " and java for the back end",
        "images" : []
      },
      {
        "title" : "EPQ Project",
        "url" : "",
        "type" : "Game Design",
        "programingLanguage" : "UnrealScript",
        "dates" : "05/03/2014 - 17/04/2014",
        "description" : "First person shooter (fps) game using UDK (Unreal Development Kit)" +
          " Creating graphics and models in Blender, UDK Editor and Photoshop",
        "images" : []
      },
      {
        "title" : "Affective Computing Research",
        "url" : "AffectiveComputing/index.html",
        "type" : "Research Group Project",
        "programingLanguage" : "HTML, CSS",
        "dates" : "16/01/2015 - 16/03/2015",
        "description" : "Led a group of four on a research task about " +
                        "Affective Computing in particular Facial Recognition" +
                        ", built the group website from scratch and gave a " +
                        "presentation on our findings.",
        "images" : []
      },
      {
        "title" : "Raspberry Pi Morse code Decoder",
        "url" : "",
        "type" : "C Arm Project",
        "programingLanguage" : "C, Arm Assembly",
        "dates" : "12/06/2015 - 19/06/2015",
        "description" : "Developed an Assembler in C to convert Arm "+
                        "assembly into Arm machine cod using existing code " +
                        "from another task to help implement the Assembler",
        "images" : []
      },
      {
        "title" : "Brighton College Entrepreneurship Competition (Upick)",
        "url" : "",
        "type" : "Entrepreneurship",
        "programingLanguage" :"",
        "dates" : "28/08/2012 - 15/12/2012",
        "description" : "Developed a prototype for a magnetic guitar plectrum" +
                        " and gave a presentation to a group of entrepreneurs" +
                        " £3000 for our company Upick.",
        "images" : []
      }
    ]
}
displayBio();
displayWork();
displayEducation();
displayProjects();


function displayBio(){
  var formattedheaderName = HTMLheaderName.replace("%data%", bio.names);
  var formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
  formattedgithub = formattedgithub.replace("##", bio.contacts.github);
  var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  formattedlinkedin= formattedlinkedin.replace("##", bio.contacts.linkedin);
  var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedCV = HTMLCV.replace("##", bio.cv.location);
  formattedCV = formattedCV.replace("%data%", bio.cv.name);
  $("#header").append(formattedheaderName);
  $("#header").append(formattedheaderRole);
  $("#header").append(formattedbioPic);
  $("#topContacts").append(formattedmobile);
  $("#topContacts").append(formattedemail);
  $("#topContacts").append(formattedgithub);
  $("#topContacts").append(formattedlinkedin);
  $("#topContacts").append(formattedCV);
  $("#topContacts").append(formattedlocation);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $(".skills:last").append(formattedSkills);
    }
  }
}



function displayWork(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates + formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }

}

function displayEducation(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedname = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedschoolWebsite = HTMLschoolWebsite.replace("%data%", 
                                                  education.schools[school].schoolWebsite);
    formattedschoolWebsite = formattedschoolWebsite.replace("##", 
                                                  education.schools[school].schoolWebsite);

    $(".education-entry:last").append(formattedname);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    if(!(education.schools[school].major === "")){
      $(".education-entry:last").append(formattedMajor);
    }
    $(".education-entry:last").append(formattedschoolWebsite);
    
  }
}

function displayProjects(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedTitle = formattedTitle.replace("##", projects.projects[project].url);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", 
                                                      projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    
    if(projects.projects[project].images.length > 0){
      for(image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%",
                                                      projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }

  }
}















$(document).click(function(loc) {
    console.log("x location = " + loc.pageX  + " y location = " + loc.pageY);
});

//$("#main").append(internationalizeButton);
//
//function inName(name){
//    var name = name.trim().split(" ");
//    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//    name[1] = name[1].toUpperCase();
//    name = name[0] + " " + name[1];
//    return name;
//}




$("#mapDiv").append(googleMap);

