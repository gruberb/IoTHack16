#include <dht.h>

dht DHT;


const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int dht_dpin = A1; //no ; here. Set equal to channel sensor is on
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)
int temp = 0;
int hum = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  DHT.read11(dht_dpin);

  // read the analog in value:
  sensorValue = analogRead(analogInPin);

  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 0, 255);

  temp = DHT.temperature;
  hum = DHT.humidity;
  
  Serial.print("fame: ");
  Serial.println(outputValue);
  Serial.print("temp: ");
  Serial.println(temp);
  Serial.print("hum: ");
  Serial.println(hum);

  delay(3000);
}
