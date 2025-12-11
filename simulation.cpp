// SkyBridge Flight Control Simulation
// Use this to demonstrate logic to professors

#include <iostream>
#include <string>

using namespace std;

class Drone {
public:
    float battery = 100.0;
    string status = "DISARMED";

    void arm() {
        if (battery > 20) {
            status = "ARMED";
            cout << "[SYSTEM] Motors Armed. Ready to fly." << endl;
        } else {
            cout << "[ERROR] Low Battery. Cannot Arm." << endl;
        }
    }

    void fly_mission(int distance_km) {
        if (status != "ARMED") return;
        
        cout << "[MISSION] Flying " << distance_km << "km..." << endl;
        float energy_used = distance_km * 5.0; // 5% per km
        battery -= energy_used;
        
        if (battery < 0) battery = 0;
        cout << "[SYSTEM] Mission Complete. Battery: " << battery << "%" << endl;
    }
};

int main() {
    Drone myDrone;
    myDrone.arm();
    myDrone.fly_mission(10);
    return 0;
}