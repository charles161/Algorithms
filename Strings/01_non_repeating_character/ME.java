import java.util.HashMap;
import java.util.ArrayList;

public class ME {
 public static void main(String[] args) {
  String s = "awesome";
  System.out.println(non_repeating(s));

 }

 public static Character non_repeating(String str) {
  ArrayList<Character> result = new ArrayList<Character>();
  ArrayList<Character> cool = new ArrayList<Character>();

  HashMap<Character, Integer> count = new HashMap<Character, Integer>();
  for (int i = 0; i < str.length(); i++) {
   if (count.containsKey(str.charAt(i))) {
    count.put(str.charAt(i), count.get(str.charAt(i)) + 1);
   } else {
    cool.add(str.charAt(i));
    count.put(str.charAt(i), 1);
   }
  }

  for (Character entry : cool) {
   System.out.println(entry + ":" + count.get(entry));
   if (count.get(entry) == 1) {
    return entry;
   }
  }

  return ':';
 }
}