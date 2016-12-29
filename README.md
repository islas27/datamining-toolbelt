# datamining-toolbelt

A small toolbelt to process json data, made with JS. A json file is included as an example of the commands: `data.json`

----

```sh
Usage: data-tool [command]


  Commands:

    attributes <file>         show attributes in the data
    analyze [options] <file>  show statistics about the data

  Options:

    -h, --help  output usage information
```

examples:

```sh
data-tool attributes data
```

And it will output the name of the attributes of the objects

```sh
data-tool analyze -t -i id,dateRegistration,firstName data
```

And it will output to console stats like type of data; max, min and averages for numeric data and a frequency table

```sh
data-tool analyze -i id,dateRegistration,firstName data
```
The same as above, excluding the table
