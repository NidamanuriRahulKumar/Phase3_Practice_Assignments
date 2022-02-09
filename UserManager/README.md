#Searching for a Specific User and Updating the User Information.

DESCRIPTION
##Project objective:

Create a Spring MVC web application that will retrieve users based on their user ID. The retrieved user data will then be edited in a form and updated in the database. The entire database processing has to be done using Hibernate. Front pages will be made in JSP.

##Background of the problem statement:


As a part of developing an ecommerce web application, the admin backend requires a module that can retrieve users based on their user ID and update their information as required.


###You must use the following:
 

- Eclipse as the IDE
- Apache Tomcat as the web server
- Spring MVC with Hibernate, log4j, and MySQL Connector

 

###Following requirements should be met:

- Create a JSP page to take in a user ID
- Create a controller that will validate the user ID. If it is invalid, it will display a JSP page with an error message. If it is valid, it will retrieve user details from the database and show an edit form in JSP
- Once the edit form is submitted, the controller will update the details in the database. A confirmation JSP page will be shown
- Follow the standard methodology of creating controllers, services, dao, and entity classes
- Document the step-by-step process involved in completing this task