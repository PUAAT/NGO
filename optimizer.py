# SkyBridge Route Optimizer (Python)
import math

class MissionPlanner:
    def __init__(self, capacity=5000):
        self.capacity = capacity
        self.burn_rate = 150 # mAh/km
    
    def estimate(self, waypoints):
        total = 0
        for i in range(len(waypoints)-1):
            p1, p2 = waypoints[i], waypoints[i+1]
            dist = math.dist(p1[:2], p2[:2])
            climb = max(0, p2[2] - p1[2])
            
            cost = (dist * self.burn_rate) + (climb * 2.5)
            total += cost
            print(f"Leg {i}: {cost} mAh")
            
        return total <= self.capacity

# Test
path = [(0,0,800), (2,3,1200), (0,0,800)]
MissionPlanner().estimate(path)