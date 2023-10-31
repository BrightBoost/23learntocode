import java.io.Closeable;

public class Window implements AutoCloseable {

    @Override
    public void close() throws Exception {
        System.out.println("Closing the window...");
    }
}
