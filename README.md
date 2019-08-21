# react-compressed-local-storage

## Powered by

https://github.com/drbh/wasm-flate and the custom react hook https://github.com/drbh/react-wasm-compression-state


## Clone 
```bash
git clone https://github.com/drbh/react-compressed-local-storage.git
```

## Install
```bash
cd react-compressed-local-storage
yarn install
```

## Run

```
yarn run
```


## In the console

The console will print out the current (decompressed state) and also show the compressed values (whenever the state changes).

On the `COMPRESS` output, we see `MzRAAcYA`, `16` and `8`. The garbbled text is the compressed value, and the counts are of decompressed and then compressed bytes. This means we only need 8 bytes to store our full 16 byte number!! 🎉

```bash
DECOMPRE MzRAAcYA 1000000000000003 8 1
CURRENT STATE 1000000000000003
COMPRESS 1000000000000003 MzRAAcYA 16 8
```