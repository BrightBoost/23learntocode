package example;

import java.util.ArrayList;
import java.util.List;

public class SimplifiedCarDealershipExample {
    private List<Vehicle> vehicleList = new ArrayList<>();

    public List<Vehicle> getVehicleList() {
        return vehicleList;
    }

    public void setVehicleList(List<Vehicle> vehicleList) {
        this.vehicleList = vehicleList;
    }

    // get all the vehicles
    public List<Vehicle> getAllVehicles() {
        return vehicleList;
    }

    // add a vehicle
    public boolean addVehicle(Vehicle vehicle) {
        return vehicleList.add(vehicle);
    }

    // remove a vehicle
    public boolean removeVehicle(Vehicle vehicle) {
        return vehicleList.remove(vehicle);
    }

}
