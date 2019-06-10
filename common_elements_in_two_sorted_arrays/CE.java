import java.util.HashMap;

public class CE {
 public static void main(String[] args) {
  System.out.println(args);
  // mostFrequent(array1) should return 1.
  int[] array1 = { 1, 2, 3 };
  // mostFrequent(array2) should return 3.
  int[] array2 = { 3, 4, 5, 1 };

  commonElements(array1, array2);
 }

 public static void commonElements(int[] a1, int[] a2) {

  HashMap<Integer, Integer> count = new HashMap<Integer, Integer>();
  for (int i : a1) {
   if (!count.containsKey(i)) {
    count.put(i, 1);
   }
  }
  for (int i : a2) {
   if (count.containsKey(i)) {
    System.out.println(i);
   }
  }
 }

}
