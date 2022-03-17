# Structure

```
Meeting {
    id: string;
    creatorId: string;
    users: {
        k4uRUFRqo: { login: sting; color: sting },
        GpigyF02q: { login: sting; color: sting },
    };
}
```

```
Chat {
    id: string;
    meetingId: string;
    messages: [
        {
            id: string;
            text: string;
            creatorId: string;
            createdAt: string
        }
    ] 
}
```

```
CodeShare {
    id: string;
    meetingId: string;
    creatorId: string;
    code: string;
}
```

```
RemoteCursor {
    id: string;
    codeShareId: string;
    creatorId: string;
    position: {
        column: number;
        lineNumber: number;
    }
}
```

```
Widget {
  
}
```
