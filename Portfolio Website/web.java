implementation “androidx.swiperefreshlayout:swiperefreshlayout:1.1.0”
import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout
import org.w3c.dom.Text

public class MainActivity extends AppCompatActivity {

@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
	// Declaring a layout (changes are to be made to this)
	// Declaring a textview (which is inside the layout)
	SwipeRefreshLayout swipeRefreshLayout = (SwipeRefreshLayout)findViewById(R.id.refreshLayout);
	TextView textView = (TextView)findViewById(R.id.tv1);

	// Refresh the layout
	swipeRefreshLayout.setOnRefreshListener(
	new SwipeRefreshLayout.OnRefreshListener() {
		@Override
		public void onRefresh() {

		// Your code goes here
		// In this code, we are just
		// changing the text in the textbox
		textView.text = "Refreshed"

		// This line is important as it explicitly
		// refreshes only once
		// If "true" it implicitly refreshes forever
		swipeRefreshLayout.setRefreshing(false);
			}
		}
	);
}
}
