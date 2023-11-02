package example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalculationToolTest {

    @Test
    public void addTwoNumbers_positiveNumbers_ok() {
        // arrange
        CalculationTool calculationTool = new CalculationTool();
        double nr1 = 4.7;
        double nr2 = 1.1;
        double expectedResult = 5.8;

        // act
        double actualResult = calculationTool.addTwoNumbers(nr1, nr2);

        // assert
        assertEquals(expectedResult, actualResult, 0.00001);

    }

    @Test
    public void divideTwoNumbers_by0_throwsArithmeticException() {
        // arrange
        CalculationTool calculationTool = new CalculationTool();
        int nr1 = 6;
        int nr2 = 0;

        // act
        // assert
        assertThrows(ArithmeticException.class, () -> calculationTool.divideTwoNumbers(nr1, nr2));
    }
    @Test
    public void divideTwoNumbers_positiveNumbers_ok() {
        // arrange
        CalculationTool calculationTool = new CalculationTool();
        int nr1 = 6;
        int nr2 = 3;
        double expectedResult = 2;

        // act
        double actualResult = calculationTool.divideTwoNumbers(nr1, nr2);

        // assert
        assertEquals(expectedResult, actualResult, 0.00001);
    }

}