.PHONY: clean all run build

SRC=src/*.ts
BSRC=browser-src/*/*.ts

# XXX: More automation here
BBSRC=browser/game/index-b.js

all: build run

run: build
	node build/test.js

build: build/test.js browser/game/index-b.js


build/test.js: $(SRC)
	tsc --moduleResolution node -t ES5 --outDir build $^

browser/game/index-b.js: browser/game/index.js
	browserify -o $@ $^

browser/game/index.js: $(BSRC)
	tsc --moduleResolution node -t ES5 --rootDir browser-src --outDir browser $^

clean:
	rm -fr build browser/*/*.js
