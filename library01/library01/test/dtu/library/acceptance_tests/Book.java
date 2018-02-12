package dtu.library.acceptance_tests;

public class Book {
	private String title;
	private String author;
	private String signature;

	public Book(String title, String author, String signature) {
		super();
		this.title = title;
		this.author = author;
		this.signature = signature;
	}

	public String getTitle() {
		return title;
	}

	public String getAuthor() {
		return author;
	}

	public String getSignature() {
		return signature;
	}

}
