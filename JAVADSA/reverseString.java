public class reverseString{

public static void main(String[] args) {
  String str="Hello World";
  String words[]=str.split("");
  String revStr="";

  for(int i=words.length - 1; i >= 0; i--){
    revStr += words[i];
  }
  System.out.println("revString");
    
} 
}