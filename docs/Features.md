# Features

## Handles different types of data

- continuous signals e.g. ECG, acceleration, thoracic impedance, etc.
- events e.g. trigger annotations, artifact regions, etc.
- values e.g. blood pressure, respiration rate, heart rate

## One or more simultaneous channels may be recorded

- e.g. multi channel ECG
- e.g. diastolic and systolic blood pressure
- e.g. three axial acceleration sensor data

## Simultaneous, synchronous storage at different sample rates

- e.g. acceleration data at 80 Hz
- e.g. ECG at 200 Hz

## Multiple sensors of one type may be recorded

- e.g. one ECG sensor for dry electrodes and one for adhesive electrodes
- e.g. multiple acceleration sensors with different locations

## May be easyly used in embedded systems

- simple way for writing data
- variable byte order (little endian, big endian)
- support of multiple data types e.g. int32, uint16, double, etc.
- no unit conversions are necessary

## Sample-exact data access

- different time bases for different entries possible
- access via sample stamp

## Support of different file formats

- binary files, CSV files, XML files projected

## Reference implementation in Java

- no dependency to commercial software
- little platform dependancy
- easy integration in MATLAB®

## Human readable meta file

- XML format
- readable in every browser or editor

## Separation of meta information and data

- one meta file (header file) and one or multiple data files
- easy opening of data files with 3rd-party software

## Direct data access possible

- data access without unisens library is possible

## Flexible way for data organisation

- free comments
- data can be arragned in logical groups
