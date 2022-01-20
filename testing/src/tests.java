import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class tests {

	private static WebDriver webDriver;
	private static String baseUrl;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sead\\Downloads\\chromedriver_win32(1)\\chromedriver.exe");
		webDriver = new ChromeDriver();
		baseUrl = "https://todo-app-cp-98935.web.app/";
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		webDriver.close();
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testTitle() throws InterruptedException {
		webDriver.get(baseUrl);
		
		WebElement title = webDriver.findElement(By.xpath("/html/body/div/div/h1"));
		assertEquals("Todo list", title.getText());
		assertNotEquals("Hello bois", title.getText());
		Thread.sleep(5000);
	}
	
	
	@Test
	void testAddTodo() throws InterruptedException {
		webDriver.get(baseUrl);
		
		WebElement addTodoButton = webDriver.findElement(By.xpath("/html/body/div/div/form/button"));
		WebElement todoName = webDriver.findElement(By.xpath("/html/body/div/div/form/div/div/input"));
		
		todoName.sendKeys("Breakfast");
		Thread.sleep(1000);
		addTodoButton.click();
		
		Thread.sleep(1000);
		
		WebElement todo = webDriver.findElement(By.className("css-yb0lig"));
		System.out.println(todo.getText());
		assertEquals("Breakfast", todo.getText());
		
		Thread.sleep(1000);
		WebElement delete = webDriver.findElement(By.tagName("path"));
		delete.click();
		
		Thread.sleep(500);
	}

}
