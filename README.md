# Node Test

## Installing dependencies
- `npm install`
- `npm start`

## Accessing
Open your browser and access: http://localhost:4200/

## User Creation and Login Process Test
Summary:  A user is able to come to a login/signup page that allows them to log-in or if they are not an existing user, sign up as a new user. In either case, the user will have a basic profile information page after signing up or logging in which will also be editable. Also, if the user has forgotten password, they will be able to obtain their password via email. Please follow the instructions below:

### If the user is not registered already:

User will be prompted to sign up with LinkedIn or their own email and password. If user chooses Linkedin, they will be connected to LinkedIn api and be registered with linkedin basic information. On the other hand, if the user chooses to enter their email, then they will enter their email, a password, and register.

Once the user is registered (just with email & pass or linkedin api), they will be given the "Fill Profile Information Page" .... which will allow them to provide their basic profile information (such as full name, address, category, date and time registered, etc) and finalize the signup process. Once the profile information page is processed, the user will be directed to their profile information page which will display the information provided and a button to edit if they need to (similar to 2.b  below).

### If the user is a registered user (existing user):

User will be able to login with LinkedIn account api or their designated username and  password (depending on how they signed up in the first place)

Once user successfully logs in, the user will come to their profile page which will display their profile information such as full name, address, company, date and time they registered, business categories, etc....the user profile page will allow not only to view the basic profile information, but it will also allow the user to edit already entered profile information (by pressing on "Edit Profile" button ) and save changes (by pressing  on "Save" button).

If user is registered but forgot the password, user can click on the link "Forgot Password" in the login page and if they click, the user will be asked for their registered email address and after the user has provided the email, the system will email them their password and if no such email is found, it will tell the user that the email does not exist.

### Security and authentication must be implemented

Please make sure that the user cannot see the profile page link or use profile page without the loggin or signup process.

Also, you must allow the user to sign-out from profile page in which case they will have to log back in to see the profile page information.

### Technologies to be used to implement this test (ONLY):

- Front-End: HTIML, Bootstrap, Angular 2   ---this part is already developed for you but you can make modification in order to connect with API and have it working. No field validation is necessary.

- Back-End (API): Node.js 
- Database: MongoDB


### How to turn in the results:

First, deposit all your code in private depository in BitBucket and share with us so that we can see your coding, organization, approach, standards, skills, etc. Please use the email address: cyrus@cyza.com and  gis@cyza.com to share the repository.

Second, provide a temporary server link that will run the entire application so that we can actually test or use as a user. Please use the email address: cyrus@cyza.com and gis@cyza.com to share the live server link
