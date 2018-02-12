package dtu.library.acceptance_tests;

import static org.junit.Assert.assertFalse;

import java.util.ArrayList;
import java.util.List;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class userTests {
	private List<User> users = new ArrayList<User>();
	private User user;
	private LibraryApp libraryApp;

	@And("^there is a user with CPR \"([^\"]*)\", name \"([^\"]*)\", e-mail \"([^\"]*)\" $")
	public void userIsHere(String cpr, String name, String email) {
		user = new User(cpr,name,email);
	}
	
	@And("^there is a user with address street \"([^\"]*)\", post code \"([^\"]*)\", city \"([^\"]*)\" $")
	public void setUserAdress(String street,int postcode,String city) {
		user.setStreet(street);
		user.setPostcode(postcode);
		user.setCity(city);
	}
	
	@When("^the administrator registers the user$")
	public void registerUser() {
		libraryApp.addUser(user);
	}
	
	@Then("^the user is a registered user of the library$")
	public void isAUser() {
		libraryApp.getUsers().contains(user);
	}
}




//@Given("^that the administrator is not logged in$")
//public void thatTheAdministratorIsNotLoggedIn() throws Exception {
//	assertFalse(libraryApp.adminLoggedIn());
//}