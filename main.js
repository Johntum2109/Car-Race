// Canvas
    var canvas = document.getElementById("_Canvas");

    var ctx = canvas.getContext("2d");

// Car Properties
    // Car1
    var car1Width = 120;
    var car1height = 70;

    var car1X = 10;
    var car1Y = 10;

    var car1Image = "Images/car1.png";

    // Car2
    var car2Width = 120;
    var car2height = 70;

    var car2X = 10;
    var car2Y = 10;

    var car2Image = "Images/car2.png";

// Background
    var road = "Images/Road.gif"

// Add
    function add() 
    {
        var backgroundImgTag = new Image();
        backgroundImgTag.onload = uploadBackground;
        backgroundImgTag.src = URL("Images/Road.gif");

        var car1ImgTag = new Image();
        car1ImgTag.onload - uploadCar1;
        car1ImgTag.src = car1Image;
    }

// UploadBackground
    function uploadBackground() 
    { 
        ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
    }

// Upload Car1
    function uploadCar1() 
    { 
        ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1height);
    }

// Movement
    // Input
        window.addEventListener("keydown", _keydown);
    
        function _keydown(e) 
        { 
            keyPressed = e.keyCode;

            // Input
                // Car1
                if ( keyPressed == "38" ) 
                { 
                    car1Up();
                }
                if ( keyPressed == "40" ) 
                { 
                    car1Down();
                }
                if ( keyPressed == "37" ) 
                { 
                    car1Left();
                }
                if ( keyPressed == "39" ) 
                { 
                    car1Right();
                }   

                // Car2
                if ( keyPressed == "87" ) 
                { 
                    car2Up();
                }
                if ( keyPressed == "83" ) 
                { 
                    car2Down();
                }
                if ( keyPressed == "65" ) 
                { 
                    car2Left();
                }
                if ( keyPressed == "68" ) 
                {    
                    car2Right();
                }
    }

    // Car1
        // Up
        function car1Up() 
        { 
            if ( car1Y >= 0 ) 
            { 
                car1Y -= 10;
            }
        }

        // Down
        function car1Down() 
        { 
            if ( car1Y >= 0 ) 
            { 
                car1Y -= 10;
                uploadBackground();
                uploadCar1();
            }
        }