public class House {
    public String address;
    public double squareFeet;
    public int nrOfRooms;

    public void describeHouse() {
        System.out.println("address: " + this.address + " nrOfRooms:" + this.nrOfRooms);
    }

    public static void describeUsage() {
        System.out.println("This construct is meant to live in.");
    }
}
 