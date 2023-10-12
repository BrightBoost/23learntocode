public class Main {
    public static void main(String[] args) {
        
        House.describeUsage();
        House h1 = new House();
        h1.address = "KH de Ruiter";
        h1.nrOfRooms = 5;

        h1.describeHouse();

        House h2 = new House();
        h2.address = "Biljarter";
        h2.nrOfRooms = 6;

        h2.describeHouse();

        
    }
    
}
