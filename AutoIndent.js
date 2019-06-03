//
//	文字を入力してから実行される
//

// カーソル位置を取得
var x = Editor.ExpandParameter("$x");
var y = Editor.ExpandParameter("$y"); 

// 入力された文字を取得
var N = Indent.GetChar();
// 使用言語取得
var t = ExpandParameter('$B');

var str = GetCharInt(N);
//MessageBox(str);
//main();

function main(){
	if(N==='\r'){
		return ;
	}else if(N.test(/\[\(\{/)){
		StartKako();
	}else if(N.test(/\]\)\}/)){
		CloseKako();
	}else if(N.test(/\"\'/)){
		Quatation();
	}//*/
	var str = GetCurStr();
	MessageBox(str);
}

// ( { [ の動作
function StartKako(){
	MessageBox(N);
}

// ) } ] の動作を
function CloseKako(){
	MessageBox(N);
}

function Quatation(){
	MessageBox(N);
}

// カーソル前後の文字を取得
function GetCurStr(){
	var str="";
	str = Editor.GetLineStr(y);
	str = [str.substring(x-2,x-1),str.substring(x-1,x)];
	return str;
}

function GetCharInt(str){
	var cnt = parseInt(str);
	
	if(str>='a'&&str<='z'){
		MessageBox('az');
	}else if('A'<=str&&str<='Z'){
		MessageBox('AZ');
	}else{
		switch(str){
			case '(':case '{':case '<':case '[':
				MessageBox("start");
				break;
			case ')':case '}':case '>':case ']':
				MessageBox("Close");
				break;
			default:
				break;
		}
	}
	
	/*else if('('<=str&&str<='}'){
		MessageBox('kigou');
	}else if("'"<=str&&str<='"'){
		MessageBox("ten1")
	}else if('"'<=str&&str<="'"){
		MessageBox("ten2")
	}//*/
}


