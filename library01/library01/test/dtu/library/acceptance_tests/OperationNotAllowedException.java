package dtu.library.acceptance_tests;

public class OperationNotAllowedException extends Throwable {

	public String getMessage() {
		return "You did fuck up";
	}

}
