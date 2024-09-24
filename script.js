var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    /// get form element;
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var cnicElement = document.getElementById('cnic');
    var contactElement = document.getElementById('contact');
    var addressElement = document.getElementById('address');
    var cityElement = document.getElementById('city');
    var countryElement = document.getElementById('country');
    // Education
    var educationElement = document.getElementById('education');
    // Experince
    var experienceElement = document.getElementById('experience');
    // SKILLSS
    var skillsElement = document.getElementById('skills');
    // check if all element present
    if (profilePictureInput && nameElement && emailElement && cnicElement && contactElement && addressElement && cityElement
        && countryElement && educationElement && experienceElement && skillsElement) {
        //  GET values from form
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var cnic = cnicElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var city = cityElement.value;
        var country = countryElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handling the profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Generate the resume html content
        // Create the Resume output
        var resumeHTML = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\" style=\"width:150px;height:150px;\">") : "", " \n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n            <p><strong>CNIC:</strong> <span id=\"edit-cnic\" class=\"editable\"> ").concat(cnic, " </span></p>\n            <p><strong>Contact:</strong> <span id=\"edit-contact\" class=\"editable\"> ").concat(contact, " </span></p>\n            <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span></p>\n            <p><strong>City:</strong> <span id=\"edit-city\" class=\"editable\"> ").concat(city, " </span></p>\n            <p><strong>Country:</strong> <span id=\"edit-country\" class=\"editable\"> ").concat(country, "</span></p>\n\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        // Display resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");
            // create container for buttons
            var buttonscontainer = document.createElement("div");
            buttonscontainer.id = "buttonscontainer";
            resumeOutputElement.appendChild(buttonscontainer);
            // ADD downlod pdf button
            var downloadbutton = document.createElement("button");
            downloadbutton.textContent = "Download as PDF";
            downloadbutton.addEventListener("click", function () {
                window.print(); /// open print dialog, allowing the save pdf
            });
            buttonscontainer.appendChild(downloadbutton);
            // ADDS share links buttons
            var sharelinkbutton = document.createElement("button");
            sharelinkbutton.textContent = "Copy Shareable Link";
            sharelinkbutton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareablelink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareablelink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                            // use clipborad api to copy the shareable link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareablelink)];
                        case 1:
                            // use clipborad api to copy the shareable link
                            _a.sent();
                            alert("shareable link copied to clipborad!");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("failed to copy link: ", err_1);
                            alert("failed to copy link to clipborad. please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonscontainer.appendChild(sharelinkbutton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("From element are missing");
    }
});
