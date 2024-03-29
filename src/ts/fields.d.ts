declare namespace kintone.types {
  interface Fields {
    メールアドレス: kintone.fieldTypes.SingleLineText;
    備考: kintone.fieldTypes.MultiLineText;
    住所: kintone.fieldTypes.SingleLineText;
    郵便番号: kintone.fieldTypes.SingleLineText;
    TEL: kintone.fieldTypes.SingleLineText;
    FAX: kintone.fieldTypes.SingleLineText;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
