// SkyBridge Flight Core (C++)
#include <iostream>

class Drone {
    float voltage = 24.0;
public:
    void safety_check() {
        if(voltage < 21.0) {
            std::cout << "[ALARM] Low Battery! RTH Triggered." << std::endl;
        } else {
            std::cout << "[SYSTEM] Systems Nominal." << std::endl;
        }
    }
};

int main() {
    Drone d;
    d.safety_check();
    return 0;
}