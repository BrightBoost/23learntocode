package example;

public class Vehicle {
    private String make;
    private String vin;

    public Vehicle(String make, String vin) {
        this.make = make;
        this.vin = vin;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }
}
