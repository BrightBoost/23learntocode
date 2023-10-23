package dates;
import java.time.*;
import java.time.format.DateTimeFormatter;

public class JavaDates {
    public static void main(String[] args) {
        LocalDate ld = LocalDate.now();
        System.out.println(ld);

        LocalTime lt = LocalTime.now();
        System.out.println(lt);

        LocalDateTime ldt = LocalDateTime.now();
        System.out.println(ldt);

        LocalDateTime ldt1 = LocalDateTime.of(2023, 10, 15, 1, 0, 0);
        System.out.println(ldt1);

        LocalTime lt1 = lt.plusHours(5);
        System.out.println(lt1);

        LocalDateTime ldtFunny1 = LocalDateTime.of(2023, 1, 28, 4, 4, 4);
        System.out.println(ldtFunny1.plusMonths(1));

        LocalDateTime ldtFunny2 = LocalDateTime.of(2023, 1, 31, 4, 4, 4);
        System.out.println("test" + ldtFunny2.plusMonths(1).minusMonths(1));


        LocalDateTime ldtFunny3 = LocalDateTime.of(2023, 4, 30, 4, 4, 4);
        System.out.println(ldtFunny3);

        LocalDateTime ldtFunny4 = LocalDateTime.of(2024, 2, 29, 4, 45, 42);
        System.out.println(ldtFunny4.plusYears(1));

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MMM-dd-yyyy");
        String formattedDate = ldtFunny4.format(dtf);
        System.out.println(formattedDate);

        System.out.println("****************************************");

        LocalDateTime rightNow = LocalDateTime.now();
        LocalDateTime returnBy = rightNow.plusDays(90).plusHours(9);

        Period period = Period.between(rightNow.toLocalDate(), returnBy.toLocalDate());
        System.out.println(returnBy);
        System.out.println("Period: " + period);
        System.out.println("Period days:" + period.getDays());

        Duration duration = Duration.between(rightNow.toLocalTime(), returnBy.toLocalTime());
        System.out.println(returnBy);
        System.out.println("Duration: " + duration);



    }
}
