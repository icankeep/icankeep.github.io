## 遇到的问题总结 2019.5.20
1. URL编码问题
```java
String docString = FileUtils.readFileToString(new File(filePath), "utf-8");
docString = URLEncoder.encode(docString);
//		docString = docString.replaceAll("@", "%40");
//		docString = docString.replace(",", "%2C");
//		docString = docString.replace(":", "%3A");
//		docString = docString.replace("'", "%27");
//		docString = docString.replaceAll(" ", "%20");
//		docString = docString.replaceAll("\\n", "%0A");
String urlString = urlPrefix + docString;

while (urlString.endsWith("%0A")) {
  urlString = urlString.substring(0, urlString.length() - 3);
}
```

2. HTTP 403问题
```java
URL url = new URL(urlString);
HttpsURLConnection conn = (HttpsURLConnection)url.openConnection();
conn.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36");
```

3. 删除"\\n"问题
需要用"\\\\n"
```java
tmp = tmp.replaceAll("\\\\n", " ");
```
