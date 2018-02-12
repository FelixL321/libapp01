package dtu.library.acceptance_tests;

import java.util.ArrayList;
import java.util.List;

public class LibraryApp {
	private List<Book> books = new ArrayList<Book>();
	private List<User> users = new ArrayList<User>();
	private boolean adminLoggedIn = false;

	public boolean adminLoggedIn() {
		return adminLoggedIn;
	}

	public boolean adminLogin(String password) {
		if(password.equals("adminadmin")) {
			adminLoggedIn = true;
			return true;
		}
		else
			return false;
	}

	public void adminLogout() {
		adminLoggedIn = false;
		
	}

	public void addBook(Book book) {
		books.add(book);
		
	}

	public List<Book> getBooks() {
		return books;
	}
	public void addUser(User user) {
		users.add(user);
	}

	public List<Book> search(String searchText) {
		List<Book> returnList = new ArrayList<Book>();
		for(Book book : books) {
			if(book.getTitle().contains(searchText)) {
				returnList.add(book);
			}
			else if(book.getAuthor().contains(searchText)) {
				returnList.add(book);
			}
			else if(book.getSignature().contains(searchText)) {
				returnList.add(book);
			}
		}
		return returnList;
	}

	public List<User> getUsers() {
		return users;
	}

}
