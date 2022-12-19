Feature: Admin view site

Scenario: ": Admin checks site
then Admin should se correct site

Feature: Admin log in 

//will be used to all scenarios 
Background: 
    Given Admin is in web staging 

Scenario: Admin successful log in
    When Admin enters correct credentials
    Then Admin should successfuly log in

    
