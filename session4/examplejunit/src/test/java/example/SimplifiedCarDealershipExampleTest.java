package example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SimplifiedCarDealershipExampleTest {
    SimplifiedCarDealershipExample carDealership;

    @BeforeEach
    public void init() {
        carDealership  = new SimplifiedCarDealershipExample();
        Vehicle v1 = new Vehicle("Ford", "123");
        Vehicle v2 = new Vehicle("Dodge", "234");

        List<Vehicle> vehicleList = new ArrayList<>();
        vehicleList.add(v1);
        vehicleList.add(v2);

        carDealership.setVehicleList(vehicleList);
    }

    @Test
    void getAllVehicles() {
        // arrange & act
        List<Vehicle> vehicles = carDealership.getAllVehicles();

        // assert
        // nr of vehicles
        assertEquals(2, vehicles.size());

        // first vehicle make being ford
        assertEquals("Ford", vehicles.get(0).getMake());

        // second vehicle make being dogdge
        assertEquals("Dodge", vehicles.get(1).getMake());
    }

    @Test
    void addVehicle() {
        // arrange
        Vehicle v = new Vehicle("Peugeot", "456");

        // act
        carDealership.addVehicle(v);

        // assert
        // length of all vehicles
        assertEquals(3, carDealership.getAllVehicles().size());

        // presence of my newly added vehicle
        assertEquals("Peugeot", carDealership.getAllVehicles().get(2).getMake());
    }


}