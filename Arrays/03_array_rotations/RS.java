
public class RS {
 public static void main(String[] args) {

  // mostFrequent(array1) should return 1.
  int[] array1 = { 1, 2, 3, 4, 5 };
  // mostFrequent(array2) should return 3.
  int[] array2 = { 3, 4, 6, 1, 2 };

  is_rotation(array1, array2);
 }

 public static boolean is_rotation(int[] a1, int[] a2) {
  if (a1.length != a2.length) {
   System.out.println("false");
   return false;
  }
  int key = -1, j = 0;

  for (int i = 0; i < a1.length; i++) {
   if (a1[i] == a2[0]) {
    key = i;
   }
  }
  if (key == -1) {
   System.out.println("false");
   return false;
  }
  for (int i = 0; i < a1.length; i++) {
   j = (i + key) % a1.length;
   if (a1[j] != a2[i]) {
    System.out.println("false");
    return false;
   }
  }

  System.out.println("true");
  return true;
 }

}