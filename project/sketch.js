/**
 * JavaScript Calculator by Ryan ODell
 * 
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Functions and Instructions
 * 
 * This calculator features a number of functions, much like a normal scientific
 * calculator. They are explained below, but most buttons follow these rules:
 *      - The first number entered is 'x' and the second is 'y'.
 *      - The calculator button shows how these numbers are used.
 * 
 *  ~ Number Keys (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
 *      Used to enter numbers.
 * 
 *  ~ Addition, Subtraction, Multiplication, and Division (+, -, *, /)
 *      Adds, subtracts, multiplies, or divides the two numbers.
 * 
 *  ~ Equal Key (=)
 *      Performs the selected operation with the given numbers.
 * 
 *  ~ Decimal Key (.)
 *      The next number typed, and any numbers after that, will appear after the
 *          decimal.
 * 
 *  ~ Positive/Negative Key (+/-)
 *      Converts a positive number to a negative and vice versa.
 * 
 * ~ Degrees/Radians Key (Deg/Rad)
 *      Changes the mode from degrees to radians or from radians to degrees.
 * 
 *  ~ Clear Key (C)
 *      Clears all inputs.
 * 
 *  ~ Answer Key (Ans)
 *      Press after pressing the equal sign to use an answer as the input for
 *          another calculation. For example, 4 - 2 Ans + 1 will evaluate to 
 *          (4 - 2) + 1, or 3.
 * 
 *  ~ Modulus (mod)
 *      Divides the first number by the second and returns the remainder. For
 *          example, 4 mod 3 will give the remainder of 4/3, or 1.
 * 
 *  ~ Root (x root y)
 *      Takes the xth root of y. For example, 3 root 8 will calculate the cube
 *          root of 8, or 2.
 * 
 *  ~ Trig Functions (sin, cos, tan, csc, sec, cot)
 *      Performs the identified trig function on the number in degrees or radians, 
 *          depending on the current setting. For example, in degree mode, 90 sin will
 *          evaluate to the sin of 90 degrees, or 1.
 * 
 *  ~ Inverse Function Key (f ^ -1)
 *      Changes the trig function keys to their inverses. Inverse functions will output 
 *          in whichever mode the calculator is in. For example, in degree mode, 
 *          1 [f ^ -1] sin will evaluate to the inverse sin of 1, or 90 degrees.
 * 
 *  ~ Greatest Common Factor (GCF)
 *      Finds the greatest common factor between the two numbers. For example, 10 GCF 4
 *          will evaluate to 2.
 * 
 *  ~ Decimal to Fraction (Dec -> Frac)
 *  ** Appears in place of GCF button when a calculation is completed **
 *      Converts a result to a fraction, and vice versa. For example, 4 / 20 will evaluate
 *          to 0.2. Pressing [Dec -> Frac] will then convert 0.2 to 1 / 5.
 * 
 *  ~ Pi Functions (n pi, pi / n)
 *  ** Appear when the pi button is pressed **
 *      Allows the entering of fractions and multiples of pi. Most commonly used with trig
 *          functions. For example, in radian mode, pi [pi / n] 6 sin will evaluate to the
 *          sin of pi / 6 radians, or 0.5.
 * 
 *  ~ Factorial Function (x!)
 *      Calculates the factorial of the currently selected number. Because this function
 *          is based on the Gamma Function, positive whole numbers or decimals may be used
 *          as inputs. For example, 3 x! will evaluate to 3 x 2 x 1 or 6.
 * 
 *  ~ Radian-to-Pi Function (a pi / b)
 *      Converts the number to a fraction in terms of pi. For example, in radian mode, 
 *          0.5 [f ^ -1] sin will evaluate to the inverse sin of 0.5. Pressing [a pi / b]
 *          will convert this number into a fraction in terms of pi; in this case, pi / 3.
 * 
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Version Log
 * 
 * v1.0.....03/01/2018.....Buttons
 * 
 * v2.0.....03/05/2018.....Add, Subtract, Multiply, or Divide two whole numbers
 *                         No decimals as of yet
 * v2.1.....03/05/2018.....Modulus, Exponents, and Logarithms
 * v2.2.....03/08/2018.....Positive/Negative and Roots
 * 
 * v3.0.....03/09/2018.....Decimals up to 3 places, rounded
 *                         "Answer" key to continue operations after result
 *                         Instruction manual
 * v3.1.....03/15/2018.....Sine, Cosine, Tangent, Cosecant, Secant, and Cotangent
 *                           functions
 *                         Full decimal functionality, with as many places as the 
 *                           calculator can fit
 * v3.2.....03/19/2018.....Added x and y variables which can be changed to move the
 *                           calculator
 *                         Fixed a problem where the calculator would freeze up if the
 *                           result was an error message
 *                         Added another row of buttons
 * 
 * v4.0.....03/20/2018.....Added a degrees-to-radians button to use with trig functions
 *                         Added a Greatest Common Factor function
 * v4.1.....03/21/2018.....Added a fraction-to-decimal button
 * v4.2.....03/22/2018.....Added pi functions for use with trig functions
 * v4.3.....03/26/2018.....Fixed trig functions to show when the function is undefined
 *                         Fixed inverse trig functions to show domain errors
 * v4.4.....03/26/2018.....Added a factorial function based on the Gamma Function
 * v4.5.....04/02/2018.....Added a rationalize function in terms of pi
 * v4.6.....09/04/2018.....Fixed radian-to-pi function to erase pi if there is an error
 * 
**/

//defining variables
var x = -30;
var y = -5;
var firstNum = "NaN";
var fNumDecimal = "NaN";
var secondNum = "NaN";
var sNumDecimal = "NaN";
var fDecCount = "NaN";
var sDecCount = "NaN";
var num = 1;
var operation = "none";
var result = "NaN";
var frac = "NaN";
var inverse = false;
var angle = "degrees";
var piButton = false;
var piMode = "NA";
var piCo = 1;
var piDen = 1;
var base = "DEC";

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

//defining each function
var add = function(n1, n2) {
    return n1 + n2;
};
var subtract = function(n1, n2) {
    return n1 - n2;
};
var divide = function(n1, n2) {
    return n1 / n2;
};
var multiply = function(n1, n2) {
    return n1 * n2;
};
var power = function(n1, n2) {
    var tot = 1;
    if (n2 > 0) {
        for (var i = 0; i < n2; i++) {
            tot *= n1;
        }
    } else if (n2 < 0) {
        for (var i = 0; i < abs(n2); i++) {
            tot /= n1;
        }
    }
    return tot;
};
var root = function(n1, n2) {
    //return pow(n1, ( (log(n2) / log(n1)) / n1) );
    return pow(n1, 1/n2);
};
var logarithm = function(n1, n2) {
    return (log(n2) / log(n1));
};
var modulus = function(n1, n2) {
    return n1 % n2;
};
var sine = function(n) {
    return sin(n);
};
var cosine = function(n) {
    return cos(n);
};
var tangent = function(n) {
    return tan(n);
};
var cosecant = function(n) {
    return (1 / sin(n));
};
var secant = function(n) {
    return (1 / cos(n));
};
var cotangent = function(n) {
    return (1 / tan(n));
};
var invSine = function(n) {
    return asin(n);
};
var invCosine = function(n) {
    return acos(n);
};
var invTangent = function(n) {
    return atan(n);
};
var invCosecant = function(n) {
    return (1 / asin(n));
};
var invSecant = function(n) {
    return (1 / acos(n));
};
var invCotangent = function(n) {
    return (1 / atan(n));
};
var GCF = function(n1, n2) {
    var a = n1;
    var b = n2;
    
    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
        //println(a + " :: " + b);
    }
    return a;
};
var proximity = function(check, target, range) {
    var proximity = check % target;
    if (proximity < range || proximity > (target - range)) {
        return true;
    } else {
        return false;
    }
};
var decToFrac = function(n, pi) {
    var a = abs(n);
    var b = 1;
    if (a % 1 !== 0) {
        for (var i = 0; i < 4; i++) {
            if (floor(a) !== a) {
                a *= 10;
                b *= 10;
            }
            if (i === 0) {
                var aDec = a;
                var a2Dec = a*10;
                while (aDec >= 1) {
                    aDec --;
                }
                while (a2Dec >= 1) {
                    a2Dec --;
                }
                if (proximity(aDec, a2Dec, 0.01)) {
                    a = a - abs(n);
                    b = b - 1;
                    break;
                }
            }
        }
        a = round(a);
        b = round(b);
        /*
        if (a > 9999 || b > 9999) {
            while (a > 9999 || b > 9999) {
                a /= 10;
                b /= 10;
            }
            a = round(a);
            b = round(b);
        }
        //*/
        var d = GCF(a, b);
        a /= d;
        b /= d;
        
    }
    if (pi === false) {
        //if (textWidth((a + " / " + b)) > 250) {
        if (a > 99999999) {
            return ("Err:Overflow");
        } else {
            return (a + " / " + b);
        }
    } else if (pi === true) {
        if (a > 99 || b > 99) {
            return "Err:Overflow";
        } else {
            return (a + "      / " + b);
        }
    }
};
var factorial = function(n) {
    var x = n + 1;
    var factorial = sqrt((2*3.14159265)/x)*pow((1/2.7182818)*(x + (1 / ( 12*x - 1/(10*x)))), x);
    if (factorial > 999999999) {
        return ("Err:Overflow");
    } else {
        return factorial;
    }
};
var piRationals = function(n) {
    var num = n;
    var pi = 3.14159265;
    
    /*
    if (num > pi) {
        while (a * pi < num) {
            a ++;
        }
    } else if (num < pi) {
        while ((a*pi)/b > num) {
            b ++;
        }
    }
    */

    /*
    if (num % pi/2 <= 0.000003) {
        b = 2;
    } else if (num % pi/3 <= 0.000003) {
        b = 3;
    } else if (num % pi/4 <= 0.000003) {
        b = 4;
    } else if (num % pi/6 <= 0.000003) {
        b = 6;
    }
    */
    
    /*
    if (a > 99 || b > 99) {
        return "Err:Overflow";
    } else {
        return (a + "      / " + b);
    }
    //*/
    
    num /= pi;
    num = num.toFixed(8);
    return decToFrac(num, true);
};
var drawButton = function(x, y) {
    if (mouseX > x && mouseX < x+50 && mouseY > y && mouseY < y+50) {
        fill(173, 168, 168);
    } else {
        fill(255, 255, 255);
    }
    rect(x, y, 50, 50);
};
var buttonTest = function(x, y) {
    if (mouseX > x && mouseX < x+50 && mouseY > y && mouseY < y+50 && mouseIsPressed) {
        return true;
    } else {
        return false;
    }
};
var numSet = function(value) {
    if (piButton === true) {
        if (piMode === "co") {
            if (piCo === "NaN") {
                piCo = value;
            } else if (piCo !== "NaN" && piCo >= 0) {
                if (((piCo * 10) + value) <= 99) {
                    piCo *= 10;
                    piCo += value;
                }
            } else if (piCo !== "NaN" && piCo < 0) {
                if (((piCo * 10) - value) >= -99) {
                    piCo *= 10;
                    piCo -= value;
                } 
            }
        } else if (piMode === "den") {
            if (piDen === "NaN") {
                piDen = value;
            } else if (piDen !== "NaN" && piDen >= 0) {
                if (((piDen * 10) + value) <= 99) {
                    piDen *= 10;
                    piDen += value;
                }
            } else if (piDen !== "NaN" && piDen < 0) {
                if (((piDen * 10) - value) >= -99) {
                    piDen *= 10;
                    piDen -= value;
                }
            }
        }
    } else if (num === 1) {
        if (firstNum === "NaN" && fDecCount === "NaN") {
            firstNum = value;
        } else if (firstNum !== "NaN" && firstNum >= 0) {
            if (((firstNum * 10) + value) <= 99999999) {
                firstNum *= 10;
                firstNum += value;
                if (fDecCount !== "NaN") {
                    fDecCount ++;
                }
            }
        } else if (firstNum !== "NaN" && firstNum < 0) {
            if (((firstNum * 10) - value) >= -99999999) {
                firstNum *= 10;
                firstNum -= value;
                if (fDecCount !== "NaN") {
                    fDecCount ++;
                }
            } 
        }
    } else if (num === 2) {
        if (secondNum === "NaN" && sDecCount === "NaN") {
            secondNum = value;
        } else if (secondNum !== "NaN" && secondNum >= 0) {
            if (((secondNum * 10) + value) <= 99999999) {
                secondNum *= 10;
                secondNum += value;
                if (sDecCount !== "NaN") {
                    sDecCount ++;
                }
            }
        } else if (secondNum !== "NaN" && secondNum < 0) {
            if (((secondNum * 10) - value) >= -99999999) {
                secondNum *= 10;
                secondNum -= value;
                if (sDecCount !== "NaN") {
                    sDecCount ++;
                }
            }
        }
    }
};
var decimalCalc = function(num, numDec) {
    var number = num;
    for (var i = 0; i < numDec; i ++) {
        number /= 10;
    }
    return number;
};
var decimalCount = function(num) {
    var number = num;
    var digits = 1;
    var count = 0;
    
    if (abs(number) < 1) {
        digits = 0;
    } else {
        while (abs(number) > 10) {
            number /= 10;
            digits ++;
        }
    }
    
    number = abs(num);
    
    if (number === 1 || number === 0) {
        count = 0;
    } else {
        number = num;
        for (var c = 1; c < (8 - digits); c ++) {
            if (number * pow(10, count) !== ceil(number * pow(10, count))) {
                count ++;
            }
        }
    }
    
    return count;
};
var piCalc = function(co, den) {
    var num = co * 31415926;
    num /= den;
    num = decimalCalc(num, 7);
    return num;
};

function draw() {
  // put drawing code here
      background(34, 255, 0);
    
    //drawing the calculator
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(50+x, 10+y, 350, 330);
    
    for (var i = 50+x; i < 400+x; i += 50) {
        for (var j = 100+y; j < 400+y; j += 50) {
            drawButton(i, j);
        }
    }
    
    fill(0, 0, 0);
    textSize(40);
    
    // number button text
    if (inverse === true && (base === "HEX" || base === "DUO")) {
        text("A", 63+x, 139+y);
    } else {
        text("0", 63+x, 139+y);
    }
    if (inverse === true && (base === "HEX" || base === "DUO")) {
        text("B", 113+x, 139+y);
    } else {
        text("1", 113+x, 139+y);
    } 
    if (inverse === true && base === "HEX") {
        text("C", 163+x, 139+y);
    } else {
        text("2", 163+x, 139+y);
    }
    if (inverse === true && base === "HEX") {
        text("D", 213+x, 139+y);
    } else {
        text("3", 213+x, 139+y);
    }
    if (inverse === true && base === "HEX") {
        text("E", 263+x, 139+y);
    } else {
        text("4", 263+x, 139+y);
    }
    if (inverse === true && base === "HEX") {
        text("F", 63+x, 189+y);
    } else {
        text("5", 63+x, 189+y);
    }
    text("6", 113+x, 189+y);
    text("7", 163+x, 189+y);
    text("8", 213+x, 189+y);
    text("9", 263+x, 189+y);
    
    // function buttons
    textSize(24);
    text("mod", 253+x, 284+y);
    text("sin", 53+x, 334+y);
    text("cos", 103+x, 334+y);
    text("tan", 153+x, 334+y);
    text("csc", 53+x, 384+y);
    text("sec", 103+x, 384+y);
    text("cot", 153+x, 384+y);
    text("Ans", 255+x, 334+y);
    text("-1", 226+x, 274+y);
    text("y", 135+x, 272+y);
    text("x", 54+x, 274+y);
    
    // number system buttons
    textSize(22);
    text("BIN", 356+x, 135+y);
    text("TER", 352+x, 185+y);
    text("OCT", 351+x, 235+y);
    text("DEC", 351+x, 285+y);
    text("DUO", 351+x, 335+y);
    text("HEX", 351+x, 385+y);
    
    textSize(20);
    if (result === "NaN") {
        text("GCF", 204+x, 233+y);
    } else {
        textSize(18);
        text("Dec", 209+x, 216+y);
        text("__", 216+x, 224+y);
        text(">", 228+x, 233+y);
        text("Frac", 208+x, 246+y);
    }
    
    textSize(18);
    text("log", 153+x, 284+y);
    text("x", 178+x, 292+y);
    text("y", 189+x, 284+y);
    text("Deg", 259+x, 371+y);
    text("____", 254+x, 375+y);
    text("Rad", 259+x, 394+y);
    if (inverse === true) {
        text("-1", 82+x, 320+y);
        text("-1", 132+x, 320+y);
        text("-1", 182+x, 320+y);
        text("-1", 82+x, 370+y);
        text("-1", 132+x, 370+y);
        text("-1", 182+x, 370+y);
    }
    
    textSize(30);
    text("+", 256+x, 225+y);
    text("/", 275+x, 229+y);
    text("/", 270+x, 248+y);
    text("-", 284+x, 243+y);
    text("/", 62+x, 298+y);
    text("/", 67+x, 279+y);
    text("_", 74+x, 252+y);
    text("_", 82+x, 252+y);
    text("_", 52+x, 275+y);
    text("~", 224+x, 365+y);
    text("b", 216.5+x, 398+y);
    text("a", 208+x, 370+y);
    
    textSize(15);
    text("| |", 227+x, 366+y);
    
    textSize(40);
    text("y", 77+x, 288+y);
    text("f", 210+x, 294+y);
    text("_", 213+x, 367+y);
    
    textSize(60);
    text("~", 107+x, 234+y);
    text("e", 159+x, 243+y);
    
    textSize(35);
    text("| |", 111+x, 239+y);
    
    if (piButton === true) {
        textSize(40);
        text("~", 322+x, 234+y);
        text("n", 302+x, 244+y);
        text("_", 313+x, 268+y);
        textSize(30);
        text("~", 316+x, 267+y);
        text("n", 316.5+x, 295+y);
        textSize(23);
        text("| |", 324.5+x, 238+y);
        textSize(15);
        text("| |", 319+x, 268+y);
    } else {
        textSize(50);
        text("*", 315+x, 251+y);
        text("/", 319+x, 293+y);
    }
    
    textSize(50);
    text("x", 107+x, 296+y);
    text("+", 310+x, 142+y);
    text("-", 316+x, 188+y);
    text(".", 69+x, 235+y);
    text("C", 307+x, 343+y);
    text("=", 310+x, 391+y);
    text("x!", 208+x, 344+y);
    
    // display
    if (firstNum !== "NaN" && secondNum === "NaN") {
        if (piMode !== "NA") {
            textSize(80);
            text("~", 116+x, 67+y);
            textSize(48);
            text("| |", 121+x, 76+y);
            if (piCo !== "NaN") {
                text(piCo, 55+x, 80+y);
            }
            if (piDen !== "NaN") {
                text("/  " + piDen, 175+x, 80+y);
            }
        } else if (fDecCount !== "NaN") {
            text(decimalCalc(firstNum, fDecCount).toFixed(fDecCount), 55+x, 80+y);
        } else {
            text(firstNum, 55+x, 80+y);
        }
    }
    if (operation !== "none" && secondNum === "NaN") {
        if (operation === "add") {
            text("+", 309+x, 80+y);
        }
        if (operation === "sub") {
            text("-", 315+x, 75+y);
        }
        if (operation === "mlt") {
            text("*", 315+x, 88+y);
        }
        if (operation === "div") {
            text("/", 318+x, 83+y);
        }
        if (operation === "mod") {
            textSize(30);
            text("mod", 288+x, 72+y);
        }
        if (operation === "pow") {
            text("^", 314+x, 78+y);
        }
        if (operation === "log") {
            textSize(30);
            text("log", 299+x, 75+y);
        }
        if (operation === "root") {
            textSize(40);
            text("/", 300+x, 88+y);
            text("/", 305+x, 69+y);
            text("_", 315+x, 34+y);
            text("_", 325+x, 34+y);
            text("_", 285+x, 60+y);
        }
        if (operation === "GCF") {
            textSize(26);
            text("GCF", 290+x, 72+y);
        }
    }
    if (secondNum !== "NaN" && result === "NaN") {
        if (sDecCount !== "NaN") {
            text(decimalCalc(secondNum, sDecCount).toFixed(sDecCount), 55+x, 80+y);
        } else {
            text(secondNum, 55+x, 80+y);
        }
    }
    if (result !== "NaN" && frac === "NaN" && piMode !== "Rational") {
        if (typeof result === "number") {
            text(result.toFixed(decimalCount(result)), 55+x, 80+y);
            text("=", 315+x, 80+y);
        } else {
            text(result, 55+x, 80+y);
        }
    }
    if (frac !== "NaN") {
        text(frac, 55+x, 80+y);
    }
    if (piMode === "Rational") {
        text(result, 55+x, 80+y);
        textSize(80);
        text("~", 116+x, 67+y);
        textSize(48);
        text("| |", 121+x, 76+y);
    }
    
    textSize(15);
    text(angle, 65+x, 30+y);
    
    if (base === "BIN") {
        text("binary", 165+x, 30+y);
    } else if (base === "TER") {
        text("ternary", 165+x, 30+y);
    } else if (base === "OCT") {
        text("octal", 165+x, 30+y);
    } else if (base === "DEC") {
        text("decimal", 165+x, 30+y);
    } else if (base === "DUO") {
        text("duodecimal", 165+x, 30+y);
    } else if (base === "HEX") {
        text("hexadecimal", 165+x, 30+y);
    }
    
    /*
    //debug
    textSize(20);
    text(firstNum, 255, 59);
    text(secondNum, 255, 89);
    text(result, 325, 59);
    text(secondNum < 0, 325, 89);
    text((mouseX-x)+" , "+(mouseY-y), 5+mouseX, 5+mouseY);
    //*/
}

function mousePressed() {
    // number button functions
    if (buttonTest(50+x, 100+y) === true) {
        numSet(0);
    }
    if (buttonTest(100+x, 100+y) === true) {
        numSet(1);
    }
    if (buttonTest(150+x, 100+y) === true) {
        numSet(2);
    }
    if (buttonTest(200+x, 100+y) === true) {
        numSet(3);
    }
    if (buttonTest(250+x, 100+y) === true) {
        numSet(4);
    }
    if (buttonTest(50+x, 150+y) === true) {
        numSet(5);
    }
    if (buttonTest(100+x, 150+y) === true) {
        numSet(6);
    }
    if (buttonTest(150+x, 150+y) === true) {
        numSet(7);
    }
    if (buttonTest(200+x, 150+y) === true) {
        numSet(8);
    }
    if (buttonTest(250+x, 150+y) === true) {
        numSet(9);
    }
    
    // decimal button function
    if (buttonTest(50+x, 200+y) === true) {
        if (num === 1 && fDecCount === "NaN") {
            fDecCount = 0;
        }
        if (num === 2 && sDecCount === "NaN") {
            sDecCount = 0;
        }
    }
    
    // negative/positive button function
    if (buttonTest(250+x, 200+y) === true) {
        if (num === 1 && firstNum !== "NaN") {
            firstNum *= -1;
        } else if (num === 2 && secondNum !== "NaN") {
            secondNum *= -1;
        }
    }
    
    // Degrees to Radians button function
    if (buttonTest(250+x, 350+y) === true) {
        if (angle === "degrees") {
            angle = "radians";
        } else if (angle === "radians") {
            angle = "degrees";
        }
    }
    
    // operation button functions
    if (buttonTest(300+x, 100+y) === true) {
        operation = "add";
        num = 2;
        piButton = false;
    }
    if (buttonTest(300+x, 150+y) === true) {
        operation = "sub";
        num = 2;
        piButton = false;
    }
    if (buttonTest(300+x, 200+y) === true) {
        operation = "mlt";
        if (piButton === false) {
            num = 2;
        } else {
            piMode = "co";
        }
    }
    if (buttonTest(300+x, 250+y) === true) {
        operation = "div";
        if (piButton === false) {
            num = 2;
        } else {
            piMode = "den";
        }
    }
    if (buttonTest(250+x, 250+y) === true) {
        operation = "mod";
        num = 2;
        piButton = false;
    }
    if (buttonTest(100+x, 250+y) === true) {
        operation = "pow";
        num = 2;
        piButton = false;
    }
    if (buttonTest(150+x, 250+y) === true) {
        operation = "log";
        num = 2;
        piButton = false;
    }
    if (buttonTest(50+x, 250+y) === true) {
        operation = "root";
        num = 2;
    }
    if (buttonTest(200+x, 200+y) === true) {
        if (result === "NaN") {
            operation = "GCF";
            num = 2;
            piButton = false;
        } else {
            if (frac === "NaN") {
                frac = decToFrac(result, false);
            } else {
                frac = "NaN";
            }
        }
    }
    if (buttonTest(200+x, 300+y) === true) {
        if (num === 1) {
            firstNum = decimalCalc(firstNum, fDecCount);
            firstNum = factorial(firstNum);
            fDecCount = 0;
        } else if (num === 2) {
            secondNum = decimalCalc(secondNum, sDecCount);
            secondNum = factorial(secondNum);
            fDecCount = 0;
        }
    }
    if (buttonTest(200+x, 350+y) === true) {
        if (num === 1) {
            firstNum = decimalCalc(firstNum, fDecCount);
            num = 2;
            secondNum = 0;
            sDecCount = 0;
            result = piRationals(firstNum);
            if (result !== "Err:Overflow") {
                piMode = "Rational";
            }
        } else if (num === 2 && result === "NaN") {
            secondNum = decimalCalc(secondNum, sDecCount);
            sDecCount = 0;
            result = piRationals(secondNum);
            if (result !== "Err:Overflow") {
                piMode = "Rational";
            }
        }else if (result !== "NaN") {
            result = piRationals(result);
            if (result !== "Err:Overflow") {
                piMode = "Rational";
            }
        }
    }
    
    // constant keys
    if (buttonTest(100+x, 200+y) === true) {
        if (num === 1) {
            firstNum = 31415926;
            fDecCount = 7;
            piButton = true;
        } else if (num === 2) {
            secondNum = 31415926;
            sDecCount = 7;
        }
    }
    if (buttonTest(150+x, 200+y) === true) {
        if (num === 1) {
            firstNum = 27182818;
            fDecCount = 7;
        } else if (num === 2) {
            secondNum = 27182818;
            sDecCount = 7;
        }
    }
    
    // trig functions
    if (buttonTest(50+x, 300+y) === true) {
        firstNum = decimalCalc(firstNum, fDecCount);
        if (piButton === true) {
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    firstNum = piCalc(piCo, piDen);
                } else {
                    firstNum = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    firstNum = piCalc(1, piDen);
                } else {
                    firstNum = piCalc(1, 1);
                }
            }
        }
        if (inverse === true) {
            num = 2;
            secondNum = 0;
            if (-1 <= firstNum && firstNum <= 1) {
                result = invSine(firstNum);
                if (angle === "radians") {
                    result = radians(result);
                }
            } else {
                result = "Err: Domain";
            }
        } else {
            if (angle === "radians") {
                firstNum = degrees(firstNum);
            }
            num = 2;
            secondNum = 0;
            result = sine(firstNum);
        }
    }
    if (buttonTest(100+x, 300+y) === true) {
        firstNum = decimalCalc(firstNum, fDecCount);
        if (piButton === true) {
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    firstNum = piCalc(piCo, piDen);
                } else {
                    firstNum = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    firstNum = piCalc(1, piDen);
                } else {
                    firstNum = piCalc(1, 1);
                }
            }
        }
        if (inverse === true) {
            num = 2;
            secondNum = 0;
            if (-1 <= firstNum && firstNum <= 1) {
                result = invCosine(firstNum);
                if (angle === "radians") {
                    result = radians(result);
                }
            } else {
                result = "Err: Domain";
            }
        } else {
            if (angle === "radians") {
                firstNum = degrees(firstNum);
            }
            num = 2;
            secondNum = 0;
            result = cosine(firstNum);
        }
    }
    if (buttonTest(150+x, 300+y) === true) {
        firstNum = decimalCalc(firstNum, fDecCount);
        if (piButton === true) {
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    firstNum = piCalc(piCo, piDen);
                } else {
                    firstNum = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    firstNum = piCalc(1, piDen);
                } else {
                    firstNum = piCalc(1, 1);
                }
            }
        }
        if (inverse === true) {
            num = 2;
            secondNum = 0;
            result = invTangent(firstNum);
            if (angle === "radians") {
                result = radians(result);
            }
        } else {
            if (angle === "radians") {
                firstNum = degrees(firstNum);
            }
            num = 2;
            secondNum = 0;
            if (firstNum % 90 !== 0) {
                result = tangent(firstNum);
            } else {
                result = "Undefined";
            }
        }
    }
    if (buttonTest(50+x, 350+y) === true) {
        firstNum = decimalCalc(firstNum, fDecCount);
        if (piButton === true) {
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    firstNum = piCalc(piCo, piDen);
                } else {
                    firstNum = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    firstNum = piCalc(1, piDen);
                } else {
                    firstNum = piCalc(1, 1);
                }
            }
        }
        if (inverse === true) {
            num = 2;
            secondNum = 0;
            if (-1 < firstNum && firstNum < 1) {
                result = "Err: Domain";
            } else {
                result = invCosecant(firstNum);
                if (angle === "radians") {
                    result = radians(result);
                }
            }
        } else {
            if (angle === "radians") {
                firstNum = degrees(firstNum);
            }
            num = 2;
            secondNum = 0;
            if (round(firstNum) % 180 !== 0) {
                result = cosecant(firstNum);
            } else {
                result = "Undefined";
            }
        }
    }
    if (buttonTest(100+x, 350+y) === true) {
        firstNum = decimalCalc(firstNum, fDecCount);
        if (piButton === true) {
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    firstNum = piCalc(piCo, piDen);
                } else {
                    firstNum = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    firstNum = piCalc(1, piDen);
                } else {
                    firstNum = piCalc(1, 1);
                }
            }
        }
        if (inverse === true) {
            num = 2;
            secondNum = 0;
            if (-1 < firstNum && firstNum < 1) {
                result = "Err: Domain";
            } else {
                result = invSecant(firstNum);
                if (angle === "radians") {
                    result = radians(result);
                }
            }
        } else {
            if (angle === "radians") {
                firstNum = degrees(firstNum);
            }
            num = 2;
            secondNum = 0;
            if (round(firstNum) % 90 !== 0) {
                result = secant(firstNum);
            } else {
                result = "Undefined";
            }
        }
    }
    if (buttonTest(150+x, 350+y) === true) {
        firstNum = decimalCalc(firstNum, fDecCount);
        if (piButton === true) {
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    firstNum = piCalc(piCo, piDen);
                } else {
                    firstNum = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    firstNum = piCalc(1, piDen);
                } else {
                    firstNum = piCalc(1, 1);
                }
            }
        }
        if (inverse === true) {
            num = 2;
            secondNum = 0;
            result = invCotangent(firstNum);
            if (angle === "radians") {
                result = radians(result);
            }
        } else {
            if (angle === "radians") {
                firstNum = degrees(firstNum);
            }
            num = 2;
            secondNum = 0;
            if (round(firstNum) % 180 !== 0) {
                result = cotangent(firstNum);
            } else {
                result = "Undefined";
            }
        }
    }
    if (buttonTest(200+x, 250+y) === true) {
        if (inverse === true) {
            inverse = false;
        } else if (inverse === false) {
            inverse = true;
        }
    }
    
    // equal button function
    if (buttonTest(300+x, 350+y) === true && ((firstNum !== "NaN" && secondNum !== "NaN") || piButton === true)) {
        firstNum = decimalCalc(firstNum, fDecCount);
        secondNum = decimalCalc(secondNum, sDecCount);
        
        if (piButton === true) {
            firstNum = 0;
            secondNum = 0;
            if (piCo !== "NaN") {
                if (piDen !== "NaN") {
                    result = piCalc(piCo, piDen);
                } else {
                    result = piCalc(piCo, 1);
                }
            } else {
                if (piDen !== "NaN") {
                    result = piCalc(1, piDen);
                } else {
                    result = piCalc(1, 1);
                }
            }
        } else if (operation === "add") {
            result = add(firstNum, secondNum);
            if (result > 999999999 || result < -999999999) {
                result = "Err:Overflow";
            }
        } else if (operation === "sub") {
            result = subtract(firstNum, secondNum);
            if (result > 999999999 || result < -999999999) {
                result = "Err:Overflow";
            }
        } else if (operation === "mlt") {
            result = multiply(firstNum, secondNum);
            if (result > 999999999 || result < -999999999) {
                result = "Err:Overflow";
            }
        } else if (operation === "div") {
            if (secondNum === 0) {
                result = "Err: Div By 0";
            } else {
                result = divide(firstNum, secondNum);
                if (result > 999999999 || result < -999999999) {
                    result = "Err:Overflow";
                }
            }
        } else if (operation === "mod") {
            if (secondNum === 0) {
                result = "Err: Div By 0";
            } else {
                result = modulus(firstNum, secondNum);
                if (result > 999999999 || result < -999999999) {
                    result = "Err:Overflow";
                }
            }
        } else if (operation === "pow") {
            result = power(firstNum, secondNum);
            if (result > 999999999 || result < -999999999) {
                result = "Err:Overflow";
            }
        } else if (operation === "log") {
            if (firstNum <= 0) {
                //result = "Err: Op Failed";
            } else {
                result = logarithm(firstNum, secondNum);
                if (result > 999999999 || result < -999999999) {
                    result = "Err:Overflow";
                }
            }
        } else if (operation === "root") {
            if (/*firstNum % 2 === 0 && */secondNum < 0) {
                result = "Err:Imagnry";
            } else {
                result = root(secondNum, firstNum);
                if (result > 999999999 || result < -999999999) {
                    result = "Err:Overflow";
                }
            }
        } else if (operation === "GCF") {
            if (firstNum === 0 || secondNum === 0) {
                result = "Err: Div by 0";
            } else if (firstNum < 0 || secondNum < 0) {
                result = "Err:Negative";
            } else if (firstNum % 1 !== 0 || secondNum % 1 !== 0) {
                result = "No Cmn Fctr";
            } else {
                result = GCF(firstNum, secondNum);
                if (result > 999999999 || result < -999999999) {
                    result = "Err:Overflow";
                }
                if (result === 1) {
                    result = "No Cmn Fct";
                }
            }
        }
    }
    
    // number system button functions
    if (buttonTest(350+x, 100+y) === true) {
        base = "BIN";
    }
    if (buttonTest(350+x, 150+y) === true) {
        base = "TER";
    }
    if (buttonTest(350+x, 200+y) === true) {
        base = "OCT";
    }
    if (buttonTest(350+x, 250+y) === true) {
        base = "DEC";
    }
    if (buttonTest(350+x, 300+y) === true) {
        base = "DUO";
    }
    if (buttonTest(350+x, 350+y) === true) {
        base = "HEX";
    }
    
    // answer button function
    if (buttonTest(250+x, 300+y) === true) {
        if (result !== "NaN") {
            firstNum = result;
            fNumDecimal = "NaN";
            fDecCount = "NaN";
            secondNum = "NaN";
            sNumDecimal = "NaN";
            sDecCount = "NaN";
            operation = "none";
            result = "NaN";
            frac = "NaN";
            piMode = "NA";
            piCo = "NaN";
            piDen = "NaN";
            inverse = false;
            num = 1;
            piButton = false;
        }
    }
    
    // clear button function
    if (buttonTest(300+x, 300+y) === true) {
        firstNum = "NaN";
        fNumDecimal = "NaN";
        fDecCount = "NaN";
        secondNum = "NaN";
        sNumDecimal = "NaN";
        sDecCount = "NaN";
        operation = "none";
        result = "NaN";
        frac = "NaN";
        piMode = "NA";
        piCo = "NaN";
        piDen = "NaN";
        inverse = false;
        num = 1;
        piButton = false;
    }
};
