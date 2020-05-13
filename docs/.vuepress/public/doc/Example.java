import java.io.IOException;
import java.util.ArrayList;

import org.unisens.*;
import org.eclipse.swt.widgets.DirectoryDialog;
import org.eclipse.swt.widgets.Shell;


public class Example 
{
	public static void main(String[] args) 
	{
		System.out.println("This example reads the first samples of a Unisens dataset.");
		String path;
		Shell shell = new Shell();
		DirectoryDialog dialog = new DirectoryDialog(shell);
		path = dialog.open();
		System.out.println("Unisens File: " + path);
		
		UnisensFactory uf = UnisensFactoryBuilder.createFactory();
		Unisens u = null;
		
		try {
			u = uf.createUnisens(path);
		} catch (UnisensParseException e) {
			System.err.println(e.getMessage());
			System.exit(0);
		}
		
		ArrayList<Entry> list = (ArrayList<Entry>) u.getEntries();
		System.out.println("Timestamp start: " + u.getTimestampStart().toString());
		System.out.println("Number of entries: " + list.size());
		
		// list all entries
		for (int i = 0; i < list.size(); i++)
		{
			System.out.println(" " + list.get(i).getId() + " (" + list.get(i).getContentClass() + ")");
		}

		// list data of first signal entry
		for (int i = 0; i < list.size(); i++)
		{
			if (list.get(i) instanceof SignalEntry) {
				// get signal entry
				SignalEntry se = (SignalEntry) list.get(i);
				
				// read some signal information (there is a lot of more...)
				System.out.println("\nReading entry  " + list.get(i).getId() + "...");
				System.out.println("Sampling rate: " + se.getSampleRate());
				System.out.println("Number of samples: " + se.getCount());
				
				// read data
				if (se.getDataType() == DataType.INT32)
				{
					try 
					{
						int[][] data = (int[][])se.read(10);
	
						System.out.println("\nsample# \tchannel# \tdata");
						
						// channels
						for (int c = 0; c < se.getChannelCount(); c++)
						{
							// samples
							for (int s = 0; s < data.length; s++)
							{
								System.out.println(s + " \t\t" + c + " \t\t" + data[s][c]);
							}
						}
					}
					catch (IOException e) 
					{
						System.out.println("Exception: Can't read data.");
						e.printStackTrace();
					}
				}
				else
				{
					System.out.println("Data type is not INT32");
				}
			}
		}
		
		// close data set
		u.closeAll();
	}	
}
