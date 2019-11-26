# treefy_js

一维数组转树形结构

## Installation

npm: 

```bash
npm i treefy_js --save
```
yarn: 

```bash
yarn add treefy_js
```

## Usage

```javascript
const treefy = require('treefy_js')
const datas = [
  {
    id: '181',
    father_id: null,
    name: '1',
  },
  {
    id: '182',
    father_id: null,
    name: '2',
  },
  {
    id: '183',
    father_id: null,
    name: '3',
  },
  {
    id: '184',
    father_id: null,
    name: '4',
  },
  {
    id: '185',
    father_id: null,
    name: '5',
  },
  {
    id: '186',
    father_id: 181,
    name: '1-1',
  },
  {
    id: '187',
    father_id: 181,
    name: '1-2',
  },
  {
    id: '188',
    father_id: 181,
    name: '1-3',
  },
  {
    id: '190',
    father_id: 183,
    name: '3-1',
  },
  {
    id: '191',
    father_id: 182,
    name: '2-1',
  },
  {
    id: '192',
    father_id: 182,
    name: '2-2',
  },
  {
    id: '193',
    father_id: 184,
    name: '4-1',
  },
  {
    id: '194',
    father_id: 185,
    name: '5-1',
  },
  {
    id: '199',
    father_id: 194,
    name: '5-1-1',
  },
  {
    id: '200',
    father_id: 0,
    name: '6',
  },
]

treefy(datas, 'id', 'father_id')
```

result:

```json
[{
	"id": 181,
	"father_id": null,
	"name": "1",
	"children": [{
		"id": 186,
		"father_id": 181,
		"name": "1-1"
	}, {
		"id": 187,
		"father_id": 181,
		"name": "1-2"
	}, {
		"id": 188,
		"father_id": 181,
		"name": "1-3"
	}]
}, {
	"id": 182,
	"father_id": null,
	"name": "2",
	"children": [{
		"id": 191,
		"father_id": 182,
		"name": "2-1"
	}, {
		"id": 192,
		"father_id": 182,
		"name": "2-2"
	}]
}, {
	"id": 183,
	"father_id": null,
	"name": "3",
	"children": [{
		"id": 190,
		"father_id": 183,
		"name": "3-1"
	}]
}, {
	"id": 184,
	"father_id": null,
	"name": "4",
	"children": [{
		"id": 193,
		"father_id": 184,
		"name": "4-1"
	}]
}, {
	"id": 185,
	"father_id": null,
	"name": "5",
	"children": [{
		"id": 194,
		"father_id": 185,
		"name": "5-1",
		"children": [{
			"id": 199,
			"father_id": 194,
			"name": "5-1-1"
		}]
	}]
}, {
	"id": 200,
	"father_id": 0,
	"name": "6"
}]
```