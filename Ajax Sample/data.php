

<?php 
include 'db.php';

$sql="select * from student_record";


if($_REQUEST['add_new_record']!=''){


	if ($_REQUEST['add_new_record']=='add_new_record'){

		$student_name=$_REQUEST['name'];
		$student_subject=$_REQUEST['subject'];
		$student_fee=$_REQUEST['fee'];
		$sql_inst="Insert into student_record(name,subject,fee) values('$student_name','$student_subject','$student_fee')";
		$run_sql=mysqli_query($conn,$sql_inst); 

		
	}
	else if ($_REQUEST['add_new_record']=='search')
	{ $sear=$_REQUEST['name_search'];	
	$sql="select * from student_record where name like '$sear%'";
	}




	else if ($_REQUEST['add_new_record']=='delete_record')
	{
		$id=$_REQUEST['id_student'];
		$sql_inst="delete from student_record where id='$id'";
		$run_sql=mysqli_query($conn,$sql_inst); 
	}

}
	


$run=mysqli_query($conn,$sql);
while ($rows =mysqli_fetch_assoc($run)) { ?>
	<tr>
		<td><?php echo $rows['id'];?></td>
		<td><?php echo $rows['name'];?></td>
		<td><?php echo $rows['subject'];?></td>
		<td><?php echo $rows['fee'];?></td>
		<td>
			<div class="dropdown">
				<button class="btn btn-primary" data-toggle="dropdown">Action <span class="caret"></span></button>
					<ul class="dropdown-menu">
						<li><a href="javascript:void(0)" onclick="">Edit</a></li>
						<li><a href="javascript:void(0)" onclick="getData('delete_record',<?php echo $rows['id'];?>);">Delete</a></li>
			
					</ul>
			</div>
		</td>				
	</tr> 

	

<?php } ?>			


				